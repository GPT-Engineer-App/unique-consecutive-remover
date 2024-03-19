import React, { useState } from "react";
import { Box, Heading, Text, Textarea, Button, VStack, useToast } from "@chakra-ui/react";

const removeIdenticalLetters = (str) => {
  const arr = str.split("");
  let i = 0;

  while (i < arr.length - 3) {
    if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2] && arr[i] === arr[i + 3] && arr[i].toLowerCase() === arr[i]) {
      arr.splice(i, 1);
    } else {
      i++;
    }
  }

  return arr.join("");
};

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const toast = useToast();

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleRemoveLetters = () => {
    if (inputText.trim() === "") {
      toast({
        title: "Error",
        description: "Please enter some text.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const result = removeIdenticalLetters(inputText);
    setOutputText(result);
  };

  return (
    <Box maxWidth="600px" margin="auto" padding={4}>
      <Heading as="h1" size="xl" textAlign="center" marginBottom={8}>
        Remove Identical Letters
      </Heading>
      <VStack spacing={4} align="stretch">
        <Text>Enter a string below and click the button to remove instances of four identical consecutive lowercase letters:</Text>
        <Textarea value={inputText} onChange={handleInputChange} placeholder="Enter your string here..." size="lg" />
        <Button colorScheme="blue" onClick={handleRemoveLetters}>
          Remove Identical Letters
        </Button>
        {outputText && (
          <Box borderWidth={1} borderRadius="md" padding={4}>
            <Text fontSize="lg" fontWeight="bold">
              Result:
            </Text>
            <Text>{outputText}</Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default Index;

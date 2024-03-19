import React, { useState } from "react";
import { Box, Heading, Text, Textarea, Button, VStack, useToast } from "@chakra-ui/react";

const removeIdenticalLetters = (str) => {
  const regex = /(.)\1{3}/g;
  return str.replace(regex, (match) => match.slice(0, 3));
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

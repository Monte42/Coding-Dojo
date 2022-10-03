package com.dojo.tires;

import java.util.ArrayList;
import java.util.Set;

public class Trie {
	public Node root;
    
    public Trie() {
        this.root = new Node();
    }
    
    public void insertWord(String word) {
        Node currentNode = this.root;
        for(int i = 0; i < word.length(); i++) {
            Character currentLetter = word.charAt(i);
            Node child = currentNode.children.get(currentLetter);
            if(child == null) {
                child = new Node();
                currentNode.children.put(currentLetter, child); 
            } 
            currentNode = child;
        }
        currentNode.isCompleteWord = true;
    }
    
    public boolean isPrefixValid(String prefix) {
    	Node currentNode = this.root; // gets root node
    	for (int i=0;i<prefix.length();i++) { // iterates prefix
    		if (!currentNode.children.containsKey(prefix.charAt(i))) { // checks curr node keys for curr char
    			return false; // if char not present return false
    		}
            currentNode = currentNode.children.get(prefix.charAt(i)); // sets currentNode to its child node
    	}
    	return true; // if for loop completed with out with no issues return True
    }
    
    public boolean isWordValid(String word) {
    	if (this.isPrefixValid(word)) {
    		return true;
    	}
    	return false;
    }
    
    public void printAllKeys() {
    	ArrayList<Character> allKeys = new ArrayList<>();
    	Node topNode = this.root;
    	Set<Character> charSet = topNode.children.keySet();
    	
    	for (char thisChar : charSet) {
    		allKeys.add(thisChar);
    		Node currNode = topNode.children.get(thisChar);
    		Set<Character> currSet = currNode.children.keySet();
    		for (char currChar : currSet) {
    			allKeys.add(currChar);
    			Node currentNode = currNode.children.get(currChar);
    			Set<Character> currentSet = currentNode.children.keySet();
    			for (char curChar : currentSet) {
        			allKeys.add(curChar);
        			Node curNode = currentNode.children.get(curChar);
        			Set<Character> curSet = curNode.children.keySet();
        			for (char cChar : curSet) {
            			allKeys.add(cChar);
        			}
	    		}
	    	}
    	}
    	System.out.println(allKeys);
    }



}

package com.dojo.tires;

public class TrieTest {
	public static void main(String[] args) {
        Trie trie = new Trie();
        trie.insertWord("car");
        trie.insertWord("card");
        trie.insertWord("chip");
        trie.insertWord("trie");
        trie.insertWord("try");
        
        
        System.out.println(trie.isPrefixValid("tri"));
        System.out.println(trie.isPrefixValid("ca"));
        System.out.println(trie.isPrefixValid("car"));
        System.out.println(trie.isPrefixValid("cha"));
        System.out.println(trie.isPrefixValid("chips"));
        System.out.println(trie.isPrefixValid("chip"));
        System.out.println(trie.isPrefixValid("sa"));

        System.out.println("");
        System.out.println(trie.isWordValid("chips"));
        System.out.println(trie.isWordValid("chip"));
        System.out.println(trie.isWordValid("try"));
        System.out.println(trie.isWordValid("cat"));

        System.out.println("");
        trie.printAllKeys();
    }
}

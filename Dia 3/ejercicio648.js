/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    class TrieNode {
        constructor() {
            this.children = {};
            this.isEndOfWord = false;
        }
    }

    class Trie {
        constructor() {
            this.root = new TrieNode();
        }

        insert(word) {
            let node = this.root;
            for (let char of word) {
                if (!node.children[char]) {
                    node.children[char] = new TrieNode();
                }
                node = node.children[char];
            }
            node.isEndOfWord = true;
        }

        getShortestRoot(word) {
            let node = this.root;
            let root = '';
            for (let char of word) {
                if (!node.children[char] || node.isEndOfWord) break;
                node = node.children[char];
                root += char;
            }
            return node.isEndOfWord ? root : '';
        }
    }

    const trie = new Trie();
    for (let word of dictionary) {
        trie.insert(word);
    }

    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        let root = trie.getShortestRoot(words[i]);
        if (root !== '') {
            words[i] = root;
        }
    }

    return words.join(' ');
};

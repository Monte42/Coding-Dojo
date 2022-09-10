import java.util.HashMap;
import java.util.Set;

public class User {
    public static int numOfUsers = 0;
    private Integer id = 0;
    private String firstName = "Mr.";
    private String lastName = "Mann";
    private String email = "mymail@mail.com";
    private Integer age = 100;


    public User(){
        numOfUsers++;
        this.id = numOfUsers;
    }

    public User(String firstName, String lastName){
        numOfUsers++;
        this.id = numOfUsers;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public User(String firstName, String lastName, String email){
        numOfUsers++;
        this.id = numOfUsers;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public User(String firstName, String lastName, String email, int age){
        numOfUsers++;
        this.id = numOfUsers;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }

    public static void displayUser(User user){
        System.out.println(user.id);
        System.out.println(user.firstName+" "+user.lastName);
        System.out.println(user.email);
        System.out.println(user.age);
    }




    // This Creates a Dict out of a string
    public HashMap<String,Integer> createDict(String testStr){
        HashMap<String, Integer> chars = new HashMap<>(); // Create new emtpy dict
        for (int i=0;i<testStr.length();i++){ // iterate through the string
            String currChar = String.valueOf(testStr.charAt(i)); // create string that equals the current character
            Set<String> charKeys = chars.keySet(); // create array to store all keys from dict 
            if (charKeys.contains(currChar)){ // check if current character in the array of keys
                chars.put(currChar, chars.get(currChar) + 1); // if current character is in dict increase value by 1
            } else { // otherwise
                chars.put(currChar, 1); // set character as the key and 1 as its value, and add it to the dict
            }
        }
        return chars;
    }

    // This finds max values from dict
    public String getMostFrequentCharacters(String testStr){
        String maxChars = ""; // Create empty string to store characters with highest value
        int maxVal = 0; // create int to hold max value of a character(s)
        HashMap<String, Integer> chars = createDict(testStr); // use above method to create a dict
        for (String character : chars.keySet() ){ // iterate through keys of that dict
            if (chars.get(character) == maxVal){ // checks if current value is equal to maxVal
                maxChars += character; // if equal add current character to maxChars String
            } else if (chars.get(character) > maxVal){ // Check if current characters value is greater than maxVal
                maxVal = chars.get(character);// If current charater has new max value set maxVal to current character value
                maxChars = "Max Chars: " + character;// re-assign maxChars to "Max Chars: {character with highest value}"
            }
        }
        return maxChars; // return the string with character(s) holding the hight value/count
    }




}

import java.util.Collection;
import java.util.HashMap; // import HashMap
import java.util.Set; // Set is a tool for HashMap

public class HashMapFun {
    public static void main(String[] args) {
        
        HashMap<String, String> userMap = new HashMap<>(); // create new HaspMap<KeyType, ValueType>
        userMap.put("id", "1"); // ------------------\
        userMap.put("name", "Gary");   //         Create key value pairs
        userMap.put("email", "mrman12@mail.com"); //------/

        System.out.println(userMap.get("name")); // retrieve a value by key
        System.out.println(userMap.containsKey("name"));
        System.out.println(userMap.containsKey("height"));
        System.out.println(userMap.containsValue("height"));
        System.out.println(userMap.containsValue("Gary"));

        Set<String> keys = userMap.keySet(); // Collects all keys of a HashMap
        Collection<String> vals = userMap.values();
        for (String key : keys){ // Iterates though "Set" of keys, thus iterating through HashMap
            System.out.println(String.format("%s: %s",key ,userMap.get(key)));
        }
        System.out.println(vals);
    }
}

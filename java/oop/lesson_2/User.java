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
}

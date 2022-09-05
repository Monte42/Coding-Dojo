import java.util.ArrayList;

public class PuzzleTest {
    public static void main(String[] args) {
        PuzzleJava appTest = new PuzzleJava();
        appTest.testConnect();

        System.out.println("======= Get Ten Rolls =======");
        appTest.getTenRolls();
        System.out.println("\n======= Get Random Letter =======");
        System.out.println(appTest.getRandomLetter());
        System.out.println("\n======= Generate Password =======");
        System.out.println(appTest.generatePassword());
        System.out.println("\n======= Generate PasswordSet =======");
        ArrayList<String> pwdSet = appTest.newPasswordSet(8);
        System.out.println(pwdSet);
        System.out.println("\n======= Shuffle Array =======");
        System.out.println(appTest.shuffleArray(pwdSet));
        System.out.println("\n======= Get Ten Rolls =======");
        System.out.println("\n======= Get Ten Rolls =======");
        System.out.println("\n======= Get Ten Rolls =======");
    }
    
}

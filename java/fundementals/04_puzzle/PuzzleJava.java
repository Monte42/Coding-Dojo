import java.util.Arrays;
import java.util.ArrayList;
import java.util.Random;
public class PuzzleJava {
    Random randMachine = new Random();
    public void testConnect(){
        System.out.println("Hello");
    }

    public int[] getTenRolls(){
        int[] tenRand = new int[10];
        for(int i=0;i<10;i++){
            int num = randMachine.nextInt(20)+1;
            tenRand[i] = num;
        }
        System.out.println(Arrays.toString(tenRand));
        return tenRand; 
    }
    
    public String getRandomLetter(){
        String[] letters = {"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"};
        return letters[randMachine.nextInt(25)]; 
    }

    public String generatePassword(){
        String pwd = "";
        for (int i=0;i<8;i++){
            pwd += getRandomLetter();
        }
        return pwd;
    }

    public ArrayList<String> newPasswordSet(int num){
        ArrayList<String> pwdSet = new ArrayList<>();
        for (int i=0;i<num;i++){
            pwdSet.add(generatePassword());
        };
        return pwdSet;
    }

    public ArrayList<String> shuffleArray(ArrayList<String> pwdSet){
        ArrayList<String> tempArr = new ArrayList<>();
        int arrLength = pwdSet.size();
        for (int i=0;i<arrLength;i++){
            int randIndex = randMachine.nextInt(pwdSet.size());
            tempArr.add(pwdSet.get(randIndex));
            pwdSet.remove(randIndex);
        }
        return tempArr;
    }
}

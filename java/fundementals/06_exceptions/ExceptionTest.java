import java.util.ArrayList;

public class ExceptionTest {
    public static void main(String[] args) {
        ExceptionUtils appTest = new ExceptionUtils();
        System.out.println("\n======= Exceptions =======\n");
        ArrayList<Object> myList = new ArrayList<Object>();
        myList.add(42);
        myList.add(true);
        myList.add("13");
        myList.add("hello world");
        myList.add(48);
        myList.add("Goodbye World");



        
        try{
            appTest.castToInt(myList);
        } catch (IncorrectValueType e) {
            System.out.println("********* ERROR: "+e+" ***********");
        }

        appTest.testConnection();
    }
}

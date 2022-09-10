import java.util.ArrayList;

class IncorrectValueType extends Exception{}

public class ExceptionUtils {
    public void testConnection(){
        System.out.println("\n Still connected...");
    }


    public ArrayList<Object> castToInt(ArrayList<Object> arr) throws IncorrectValueType{
        ArrayList<Object> intArr = new ArrayList<>();
        for (int i=0;i<arr.size();i++){
            // try {
            //     Integer castedValue = (Integer) arr.get(i);
            // } catch (ClassCastException e) {
            //     System.err.println(e);
            // }
            
            if (arr.get(i) instanceof Integer){
                Object castedValue = (Integer) arr.get(i);
                intArr.add(castedValue);
            } else {
                System.err.println("************** Index of Error: "+i+" **************");
                System.err.println("** Value that caused Error: "+arr.get(i)+" Type:("+arr.get(i).getClass().getSimpleName()+") **");
                throw new IncorrectValueType();
            }
        }
        return intArr;
        }
    }

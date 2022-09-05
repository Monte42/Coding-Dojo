import java.util.ArrayList;
import java.util.Date;
public class AlfredQuotes {

    public String basicGreeting(){
        return "Hello, its lovely to see you.  How are you?";
    } 
    
    public String guestGreeting(String name) {
        String temp_String = String.format("Hello %s, lovely to meet you.", name);
        return temp_String;
    }

    public String guestGreeting(String name, String dayPeriod) {
        String temp_String = String.format("Hello %s, it is %s.", name, dayPeriod);
        return temp_String;
    }

    public String dateAnnouncement(){
        Date date = new Date();
        return String.format("The current date is: " + date);
    }

    public String respondBeforeAlexis(String conversation){
        if (conversation.indexOf("Alexis")>=0){
            return "Alexis, really?!";
        } else if (conversation.indexOf("Alfred")>=0){
            return "Well Of course, it would be my pleasure.";
        } else{
            return "Are you talking to me?";
        }
    }

    public String[] convertToAnArry(String conversation) {
        String[] tempArr = conversation.split(" ");
        return tempArr;
    }
}

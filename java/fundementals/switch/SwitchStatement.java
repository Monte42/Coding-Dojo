public class SwitchStatement {
    public static void main(String[] args){
        int day = 2;
        switch(day){
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuseday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            case 4:
                System.out.println("Thursday");
                break;
            case 5:
                System.out.println("Friday");
                break;
            case 6:
                System.out.println("Saturday");
                break;
            case 7:
                System.out.println("Sunday");
                break;
            default:
                System.out.println("There are only 7 day a week");
        }

        boolean is_vaild = true;
        if (is_vaild) {
            System.out.println("User is valid");
        } else {
            System.out.println("Not valid");
        }

        System.out.println(is_vaild ? "Valid user":"not valid");
    }
}


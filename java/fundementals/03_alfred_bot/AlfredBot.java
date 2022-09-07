public class AlfredBot {
    public static void main(String[] args) {

                // // Make an instance of AlfredQuotes to access all its methods.
                AlfredQuotes alfredBot = new AlfredQuotes();
                System.out.println(alfredBot.revString("Hello World!"));
                System.out.println(alfredBot.palidrome("racecar"));
                System.out.println(alfredBot.palidrome("mop"));
                
                // Make some test greetings, providing any necessary data
                String testGreeting = alfredBot.basicGreeting();
                String testGuestGreeting = alfredBot.guestGreeting("Beth Kane");
                String testGuestGreeting2 = alfredBot.guestGreeting("Matt Biggs", "evening");
                String testDateAnnouncement = alfredBot.dateAnnouncement();
                String[] testArr = alfredBot.convertToAnArry(
                                    "Hello Alfred, would you get me some water?"
                                    );
                
                String alexisTest = alfredBot.respondBeforeAlexis(
                                    "Alexis! Play some low-fi beats."
                                    );
                String alfredTest = alfredBot.respondBeforeAlexis(
                    "I can't find my yo-yo. Maybe Alfred will know where it is.");
                String notRelevantTest = alfredBot.respondBeforeAlexis(
                    "Maybe that's what Batman is about. Not winning. But failing.."
                );
                
                // Print the greetings to test.
                System.out.println(testGreeting);
                
                // Uncomment these one at a time as you implement each method.
                System.out.println(testGuestGreeting);
                System.out.println(testGuestGreeting2);
                System.out.println(testDateAnnouncement);
                System.out.println(alexisTest);
                System.out.println(alfredTest);
                System.out.println(notRelevantTest);
                for (String el : testArr) {
                    System.out.println(el);
                }
    }
}

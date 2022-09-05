import java.util.HashMap;

public class PlayListTest {
    public static void main(String[] args) {

        PlayList trackManager = new PlayList();

        HashMap<String,String> trackList = new HashMap<>();
        trackList.put("Best Of Me", "I have a dream, that's all I need, I'll make it happen with some work and belief");
        trackList.put("Greatful", "Always do it on my own, So I gotta get through it, And the only thing I know");
        trackList.put("Rumors", "She's got some nice long hair And you know that she's a bad chick All the boys stare Can't help it it's a habit");
        trackList.put("Flirt", "She just wants to flirt so I flirt right back, I just put in work yea I work like that");


        System.out.println("\n============ One Track =============");
        System.out.println(trackManager.fetchTrackByTitle(trackList, "Rumors"));
        System.out.println(trackManager.fetchTrackByTitle(trackList, "Flirt"));
        System.out.println("\n============ All Tracks =============");
        System.out.println(trackManager.fetchAllTraks(trackList));


    }
}
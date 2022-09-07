import java.util.ArrayList;
import java.util.HashMap;
import java.util.Set;

public class PlayList {
    public String fetchTrackByTitle(HashMap<String,String> playList,String track){
        return String.format("%s: %s", track, playList.get(track));
    }
    public ArrayList<String> fetchAllTraks(HashMap<String,String> playList){
        ArrayList<String> allTracks = new ArrayList<>();
        Set<String> tracks = playList.keySet();
        for (String track : tracks){
            allTracks.add(String.format("%s:\n%s\n\n",track, playList.get(track)));
        }
        return allTracks;
    }
}


package Controller;

import Model.DAO.Database;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("/brugere")
public class Brugere {
    @GET
    public String getBrugere() {
        return "blah";
    }
}

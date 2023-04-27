import { useFetch } from "../../hooks/useFetching";
import { Team } from "../../types";
import { NotFound } from "../NotFound/NotFound";
import { Ul } from "./style";

export const Teams = () => {
    const url = 'api/Data/teams';
    const { data: teams, err } = useFetch<Team[]>(url);

    if (!err) {
        return(

            <div>
                <h2>Equipe</h2>
                <br/>
                <Ul>
                {teams?.map((team) => {
                    return(
                        <li key={team.id} style={{listStyle:"none"}}>
                            <h4 className="subtitle">{team.description}</h4>
                            <ul>
                            {team.members.map((member) => {

                                return(
                                    <li key={member.id} 
                                        style={
                                            {"display":"inline-block", "padding":"30px", "textAlign":"center"}
                                        }
                                    >
                                        <img 
                                            src={require('../../assets/members/' + member.id + '.jpg')} alt={member.name}
                                            style={{width:"120px", height:"140px"}}
                                        />
                                        <h6 className="name">{member.name}</h6>
                                        <p> Lattes: <a href={member.lattes}>{member.lattes}</a> </p>
                                        { member.member_team_id === 4? (<p> Github: <a href={member.git}> {member.git} </a> </p>) : null }
                                    </li>
                                )
                            })}
                            </ul>
                        </li>
                    )
                })}
            </Ul>
            </div>
        )
    }else{
        return (
            <NotFound/>
        )
    }
}

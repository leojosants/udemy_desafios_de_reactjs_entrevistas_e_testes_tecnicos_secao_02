import Profile from "./Profile";

// eslint-disable-next-line react/prop-types
const Family = ({ members }) => {
    return (
        <>
            {
                // eslint-disable-next-line react/prop-types
                members.map((member, index) => (
                  <Profile key={index} name={member.name} last_name={member.last_name} age={member.age} job={member.job} />  
                ))
        }
        </>
    );
};

export default Family;
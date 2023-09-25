// eslint-disable-next-line react/prop-types
const Profile = ({name, last_name, age, job}) => {
    return (
        <div>
            <p>Nome completo: {name} {last_name}.</p>
            <p>Idade: {age} anos.</p>
            <p>Ocupação: {job}.</p>
        </div>
    );
};

export default Profile;
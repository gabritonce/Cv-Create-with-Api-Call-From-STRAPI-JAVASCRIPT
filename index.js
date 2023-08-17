
const endpoint3 = "http://localhost:1337/api/cvs";

const onGetApiCv = () => {
    fetch(endpoint3, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json()
    ).then((resJson) => {
        console.log(resJson);

        const Cv = resJson.data;

        Cv.forEach((elem) => {
            const Name = elem.attributes.Name;
            const email = elem.attributes.Email;
            const experience = elem.attributes.Experience;
            const skills = elem.attributes.Skills;
            const TEL = elem.attributes.TEL;
            const occupation = elem.attributes.Occupation
            const education = elem.attributes.education

            const dispalyName = `${Name}` 
            document.getElementById('name').innerHTML = dispalyName;

            const dispalyEmail = `Email: ${email}`
            document.getElementById('email').innerHTML = dispalyEmail;

            const dispalyaTel = `Tel: +39 ${TEL}`
            document.getElementById('tel').innerHTML = dispalyaTel;

            const dispalyExperience = `${experience}`
            document.getElementById('experience').innerHTML = dispalyExperience;

            const displayOccupation = `${occupation}`
            document.getElementById('occupation').innerHTML = displayOccupation;

            const displaySkills = `${skills}`
            document.getElementById('skills').innerHTML = displaySkills;

            const displayEducation = `${education}`
            document.getElementById('education').innerHTML = displayEducation;
        });
    });
};

onGetApiCv();



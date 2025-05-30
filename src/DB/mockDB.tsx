interface Icourses {
    id : string,
    name : string,
    desc : string,
    rating : number,
    ImgSrc : string
}

interface Iuser {
    uid : string,
    name : string,
    picturelnk : string,
}

interface IuserReview {
    subjectID : string,
    uid : string,
    testm : string,
    rating : number
}

const courses : Array<Icourses> = [
    {
        id : "1",
        name : "Artificial Intelligence",
        desc : "Explore how machines learn and make decisions. This course covers core AI concepts like machine learning, neural networks, and real-world applications—no experience required.",
        rating : 4.5,
        ImgSrc : "../src/assets/AICourse.png"
    },
    {
        id : "2",
        name : "Python",
        desc : "This course introduces the basics of Python for web development, automation, data analysis, scripting, and problem-solving—no experience needed.",
        rating : 4.7,
        ImgSrc : "../src/assets/Py.png"
    },
    {
        id : "3",
        name : "Cybersecurity",
        desc : "This course covers the fundamentals of cybersecurity, including network security, threat analysis, cryptography, and ethical hacking—no prior experience required.",
        rating : 4.4,
        ImgSrc : "../src/assets/CY.jpg"
    }
]

const users : Array<Iuser> = [
    {
        name : "Arthur Morgan",
        picturelnk : "/",
        uid : "001"
    },
    {
        name : "Joel Miller",
        picturelnk : "/",
        uid : "002"
    },
    {
        name : "Eren Yeager",
        picturelnk : "/",
        uid : "003"
    }
]


const userReviews : Array<IuserReview> = [
    {
        subjectID : "1",
        uid : "001",
        rating : 4.5,
        testm : "A well-built course. Helped me quite a lot."
    },
    {
        subjectID : "2",
        uid : "002",
        rating : 4.6,
        testm : "A well-built course. Helped me quite a lot."
    },
    {
        subjectID : "3",
        uid : "003",
        rating : 4.7,
        testm : "A well-built course. Helped me quite a lot."
    }
]

export {courses, users, userReviews}
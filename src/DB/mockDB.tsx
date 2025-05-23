interface Icourses {
    id : string,
    name : string,
    desc : string,
    rating : number,
    ImgSrc : string
}

const courses : Array<Icourses> = [
    {
        id : "1",
        name : "Artificial Intelligence",
        desc : "Explore how machines learn and make decisions. This course covers core AI concepts like machine learning, neural networks, and real-world applications—no experience required.",
        rating : 4.5,
        ImgSrc : "./src/assets/AI.png"
    },
    {
        id : "2",
        name : "Python",
        desc : "This course introduces the basics of Python for web development, automation, data analysis, scripting, and problem-solving—no experience needed.",
        rating : 4.7,
        ImgSrc : "./src/assets/Py.png"
    },
    {
        id : "3",
        name : "Cybersecurity",
        desc : "This course covers the fundamentals of cybersecurity, including network security, threat analysis, cryptography, and ethical hacking—no prior experience required.",
        rating : 4.4,
        ImgSrc : "./src/assets/CY.jpg"
    }
]

export {courses}
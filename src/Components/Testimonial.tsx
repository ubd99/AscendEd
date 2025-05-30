import { Link } from "react-router-dom"
import { users, userReviews, courses } from "../DB/mockDB"

interface testInfo{
    userid: string,
    className? : string,
}

const Testimonial = ({userid, className=""}: testInfo) =>{
    const user = users.find((u)=> u.uid === userid);
    const usRev = userReviews.find((r) => r.uid === userid)
    const course = courses.find((c) => c.id === usRev?.subjectID) 
    return (
        <div className={`sm:flex justify-center text-center sm:text-left rounded-sm md:rounded-md lg:rounded-lg xl:rounded-xl p-3 xl:p-6 w-50 md:w-70 lg:w-80 xl:w-90 xl:h-100 ${className}`}>
            <Link to="/">
                <p className="italic xl:text-2xl xl:pt-4">{`"${usRev?.testm}"`}</p>
                <div className="flex pt-6">
                    <div className="items-center my-auto w-1/4 sm:w-1/8 mx-5">
                        <img src="../src/assets/customer.jpg" className="rounded-full my-auto"/>
                    </div>
                    <div>
                        <p className="font-semibold">{user?.name}</p>
                        <p className="xl:pt-1">{`Rating: ${usRev?.rating}`}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export {Testimonial}
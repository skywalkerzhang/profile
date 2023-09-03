import Card from "../components/Card"
import ProfileImage from "../assets/images/profile.jpg"
import Fa from 'solid-fa'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Home() {
    return (
        <div class="mx-auto columns-2 h-full my-4">
            <Card>
                <div class="flex">
                    <img src={ProfileImage} alt="profile"
                        class="flex justify-start m-0 p-0 w-52 h-64 rounded-md" />
                    <div class="mx-8 w-full">
                        <h1 class="text-left text-2xl flex-row">
                            Name: <span class="text-yellow">Xiongrong Jin</span>
                        </h1>
                        <div class="text-lg">Self Introduction</div>
                        <p class="text-pink">
                            blabla balblabla  blablablabla dafjlasdkjflksajfkl <br />
                            and blablablablka <br />
                            and blabla
                        </p>
                        <hr class="w-full mt-2" />
                        <div class="mt-2">
                            Contact Me
                        </div>
                        <div class="flex"><Fa icon={faPhone} scale={0.9} translateY={0.3} />
                            <span class="text-green ml-2">1111111111</span>
                        </div>
                        <div class="flex"><Fa icon={faEnvelope} scale={0.9} translateY={0.3} />
                            <span class="text-green ml-2"><a class="hover:text-blue" href="mailto:1111@2222.com">11111@222.com</a></span>
                        </div>
                        <ul class="flex mt-4">
                            <li class="hover:text-blue hover:cursor-pointer mr-4">
                                <a href="https://www.baidu.com" target="_blank"     >
                                    <Fa icon={faGithub} />
                                </a>
                            </li>
                            <li class="hover:text-blue hover:cursor-pointer mr-4">
                                <a href="https://www.baidu.com" target="_blank">
                                    <Fa icon={faLinkedin} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Card>
            <Card>
                <div class="text-3xl">
                    Education Summary
                </div>
                <hr class="w-full mt-1" />
                <ul class="mt-4">
                    <li>TBD1</li>
                    <li>TBD2</li>
                </ul>
            </Card>
        </div>
    )
}

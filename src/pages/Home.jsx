import Card from "../components/Card"
import ProfileImage from "../assets/images/profile.jpg"
import Fa from 'solid-fa'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Home() {
    return (
        <div class="mx-auto flex flex-wrap h-full my-4">
            <Card class="flex flex-wrap flex-grow">
                <img src={ProfileImage} alt="profile"
                    class="justify-start md:m-0 p-0 ml-16 mb-4 md:w-52 md:h-64 w-24 h-32 rounded-md" />
                <div class="max-w-md ml-4">
                    <h1 class="text-2xl">
                        Name: <span class="text-yellow">Yue Zhang</span>
                    </h1>
                    <div class="text-lg">Self Introduction</div>
                    <p class="text-pink mt-2">
                        Hi I am Yue Zhang (Luna) -  a CS PhD student at UTD, focusing on Vision and Language and related fields. My supervisor is Professor <a href="https://personal.utdallas.edu/~vibhav.gogate/" target="_blank">  Vibhav Gogate </a>
                    </p>
                    <hr class="mt-2" />
                    <div class="mt-12 text-lg">
                        Contact Me
                    </div>
                    <div class="flex">
                        <Fa icon={faEnvelope} scale={0.9} translateY={0.3} />
                        <span class="text-green ml-2">
                            <a class="hover:text-blue" href="mailto:skywalkerzhang19@gmail.com">
                                skywalkerzhang19 AT gmail DOT com</a>
                        </span>
                    </div>
                    <ul class="mt-2 flex">
                        <li class="hover:text-blue hover:cursor-pointer mr-4">
                            <a href="https://github.com/skywalkerzhang/profile/" target="_blank"     >
                                <Fa icon={faGithub} />
                            </a>
                        </li>
                        <li class="hover:text-blue hover:cursor-pointer mr-4">
                            <a href="https://www.linkedin.com/in/yue-zhang-b44635287/" target="_blank">
                                <Fa icon={faLinkedin} />
                            </a>
                        </li>
                    </ul>
                </div>
            </Card>
            <Card class="flex-row flex-grow">
                <div class="text-3xl">
                    EDUCATION BACKGROUND
                </div>
                <hr class="mt-2" />
                <div class="mt-4 flex-row">
                    <div class="flex justify-between">
                        <div class="font-bold">
                            the University of Texas at Dallas
                        </div>
                        <div>08/2023-Present</div>
                    </div>
                    <div>Ph.D. student | Current GPA: 4.0/4.0</div>
                    <div class="flex justify-between mt-2">
                        <div class="font-bold">
                            the University of Manchester, UK
                        </div>
                        <div>09/2020-09/2021</div>
                    </div>
                    <div>MSc in Advanced Computer Science | Distinction</div>
                    <div class="flex justify-between mt-2">
                        <div class="font-bold">
                            Zhejiang Normal University, China
                        </div>
                        <div>09/2016-06/2020</div>
                    </div>
                    <div class="">
                        B.E. in Computer Science and Technology | Overall GPA: 92/100 (Ranked: 1/34)
                    </div>
                </div>
            </Card>
            <Card class="flex-row flex-grow">
                <div class="text-3xl">
                    RESEARCH EXPERIENCES
                </div>
                <hr class="mt-2" />
                <div class="mt-4 flex-row">
                    <div class="flex justify-between">
                        <div class="font-bold">
                            Research Assistant, Hong Kong University of Science and Technology(Guangzhou) | Supervisor: <a href="https://cse.hkust.edu.hk/~hunkim/" target="_blank">Porf. Sung Kim</a>, <a href="https://www.lucypark.kr/" target="_blank">Dr. Lucy Park</a>
                        </div>
                        <div>04/2022-03/2023</div>
                    </div>
                    <div class="list-item ml-4">
                        Conducted research on Information Extraction in Multimodal documentation, training and fine-tuning a series BERT-based model.
                    </div>
                    <div class="list-item ml-4">
                        Introduced a Post Correction Model to improve information extraction results in the field of multimodal document information extraction, improving the accuracy from 68.4438 to 71.6858
                    </div>
                    <div class="list-item ml-4">
                        Proposed Extract Answer Merge Answer (EAMA) in the field of multimodal table information extraction, achieving third place winner in the VQAonBD task of the ICDAR competition.
                    </div>
                    <div class="flex justify-between mt-2">
                        <div class="font-bold">
                            Graduation Project--ECG (Electrocardiograph) QRS Feature Disease Recognition | Supervisor: <a href="https://personalpages.manchester.ac.uk/staff/david.wong/default.htm" target="_blank">Prof. David Wong</a>
                        </div>
                        <div>01/2021-09/2021</div>
                    </div>
                    <div class="list-item ml-4">
                        Extracted QRS features using three methods of Pan, Lourenco, and Kalidas from PhysioNet, and completed two comparative models;
                    </div>
                    <div class="list-item ml-4">
                        Entered features into Adaptive Lead Weighted ResNet with an accuracy of F1 accuracy, increasing the recall rate and accuracy by 1% for most diseases and by roughly 7% for other diseases.
                    </div>
                </div>
            </Card>

            <Card class="flex-row flex-grow">
                <div class="text-3xl">
                    AWARD and HONOURS
                </div>
                <hr class="mt-2" />
                <div class="text-xl">
                    Scholarships
                </div>
                <div class="flex justify-between">
                    <div>
                        President’s Special Award
                    </div>
                    <div>
                        2020
                    </div>
                </div>
                <div class="flex justify-between">
                    <div>
                        Government Scholarship Awarded by the Education Department of Zhejiang Province
                    </div>
                    <div>
                        2018
                    </div>
                </div>
                <div class="flex justify-between">
                    <div>
                        First-class Scholarship of Zhejiang Normal University
                    </div>
                    <div>
                        2017, 2018, 2019
                    </div>
                </div>
            </Card>
            <Card class="flex-row flex-grow w-5/6">
                <div class="text-3xl">
                    PAPERS
                </div>
                <hr class="mt-2" />
                <div class="mt-4 flex-row">
                    <div class="flex justify-between">
                        <div class="font-bold">
                            <a href="https://arxiv.org/pdf/2402.11414.pdf" target="_blank">
                                Fine-grained and Explanable Factuality Evaluation for Multimodal Summarization
                            </a>
                        </div>
                        <div>AAAI 2025</div>
                        <div class="list-item ml-4">
                            Yue Zhang, Jingxuan Zuo, Liqiang Jing
                        </div>
                        <div class="font-bold">
                            <a href="https://arxiv.org/pdf/2412.16232.pdf" target="_blank">
                                Defeasible Visual Entailment: Benchmark, Evaluator, and Reward-Driven Optimization
                            </a>
                        </div>
                        <div>AAAI 2025</div>
                        <div class="font-bold">
                            <a href="https://openreview.net/pdf?id=ZVDWzgk6L6" target="_blank">
                                A Unified Hallucination Mitigation Framework for Large Vision-Language Models
                            </a>
                        </div>
                        <div>AAAI 2025</div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

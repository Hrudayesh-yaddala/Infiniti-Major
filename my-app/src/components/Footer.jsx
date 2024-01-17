export default () => {
    return (
        <div>
            <footer class="px-3 pt-4 lg:px-9 bg-[#ffa781] border border-black">
                <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">

                    <div class="sm:col-span-2">
                        <a href="/home" class="inline-flex items-center">
                            <img src="https://mcqmate.com/public/images/logos/60x60.png" alt="logo" class="h-8 w-8"/>
                                <span class="ml-2 text-xl font-bold tracking-wide text-[#5b0e2d]">INFINITI SCRIPT</span>
                        </a>
                        <div class="mt-6 lg:max-w-xl">
                            <p class="text-sm text-gray-800">
                            InfinitiScript is an innovative and versatile text analysis and conversion application that leverages Natural Language Processing (NLP) technology to cater to a diverse user base. Which efficiently converts your audio files into text files, scanned pdfs into required format of text files. It also helps in converting files from one language to another language. It helps you by solving mathematical problems
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 text-sm">
                        <p class="text-base font-bold tracking-wide text-[#5b0e2d]">Popular Services</p>
                        <p href="/">Hand Written to Editable Doc</p>
                        <p href="/">Text Summarization</p>
                        <p href="/">Text to Audio Conversion</p>
                        <p class="text-base font-bold tracking-wide text-[#5b0e2d]">Popular Technologies</p>
                        <p href="/">Optical Character Recognition</p>
                        <p href="/">Natural Language Processing</p>
                        <p href="/">Machine Learning</p>
                    </div>

                    <div>
                        <p class="text-base font-bold tracking-wide text-gray-900">COMPANY IS ALSO AVAILABLE ON</p>
                        <div class="flex items-center gap-1 px-2">
                            <a href="/home" class="w-full min-w-xl">
                                <img src="https://mcqmate.com/public/images/icons/playstore.svg" alt="Playstore Button"
                                    class="h-10"/>
                            </a>
                            <a class="w-full min-w-xl" href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA">
                                <img src="https://mcqmate.com/public/images/icons/youtube.svg" alt="Youtube Button"
                                    class="h-28"/>
                            </a>
                        </div>
                        <p class="text-base font-bold tracking-wide text-gray-900">Contacts</p>
                        <div class="flex">
                            <p class="mr-1 text-gray-800">Email:</p>
                            <a href="#" title="send email">admin@InfinitiScript.com</a>
                        </div>
                    </div>

                </div>

                <div class="flex flex-col-reverse justify-between pt-5 pb-10 lg:flex-row">
                    <p class="text-sm text-[#5b0e2d]">© Copyright 2023 INFINITI. All rights reserved.</p>
                    <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                        <li>
                            <a href="/home"
                                class="text-sm text-[#5b0e2d] transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy
                                &amp; Cookies Policy
                            </a>
                        </li>
                        <li>
                            <a href="/home"
                                class="text-sm text-[#5b0e2d] transition-colors duration-300 hover:text-deep-purple-accent-400">Disclaimer
                            </a>
                        </li>
                    </ul>
                </div>

            </footer>
        </div>
    )
}
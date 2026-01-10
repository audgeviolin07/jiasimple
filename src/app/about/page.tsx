import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', position: 'relative', backgroundColor: '#000' }}>
      <Link href="/" className="fixed top-6 left-6 md:top-8 md:left-12 lg:top-10 lg:left-16 flex items-center gap-2 text-white text-sm md:text-base z-20 hover:opacity-80">
        <Image src="/seedimage.png" alt="seed" width={20} height={20} />
        jia chen
      </Link>

      <nav className="fixed top-6 right-6 md:top-8 md:right-12 lg:top-10 lg:right-16 flex items-center gap-4 text-white text-sm md:text-base z-20">
        <Link href="/about" className="hover:opacity-80">about</Link>
        <Link href="/friends" className="hover:opacity-80">friends</Link>
        <Link href="/writing" className="hover:opacity-80">writing</Link>
      </nav>

      <div className="relative z-10 flex items-start justify-center min-h-screen p-8 md:p-16 lg:p-24">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-10 max-w-4xl w-full p-8 md:p-12 mt-16 md:mt-24">
          <div className="flex flex-col items-center flex-shrink-0 w-[250px]">
            <Image src="/jiamelong.png" alt="Jia" width={250} height={250} className="rounded-lg" />
          </div>

          <div className="text-white text-base max-w-lg leading-relaxed space-y-6">
            <p>my entire life story</p>
            
            <p>since i was young, i couldn&apos;t keep my hands still.</p>

            <p>my earliest recollection of life was in preschool, counting beads with an abacus. there was a snack drawer with saltine crackers and cheddar cheese. i remember reading this book about sticky gum. from then on i read all the books and that started my journey of becoming an avid reader.</p>

            <p>i then moved to taiwan at age 5. and came back at 9.</p>

            <p>the dreams (ones i had when asleep, subconscious) i had at this point were adventurous. i remember stealing snacks and candy in my dream.</p>

            <div className="flex flex-col items-center">
              <Image src="/bedroom.png" alt="my childhood bedroom" width={400} height={300} className="rounded-lg" />
              <p className="text-sm text-gray-400 mt-2">my childhood bedroom</p>
            </div>

            <p>in elementary school, i was imaginative and made up detailed scenarios at recess, drew comics and pretended i was a dragon. also a detailed 32 page story based off cat warriors that i co-wrote with two friends and a giant google slide doc where i invited all my friends to make their houses. i tried to do a youtube channel many times.</p>

            <p>something my mother told me at 16 changed the way i saw life. it was far from what anyone should say, and i&apos;ve viewed myself differently since then. i then spent all my time in the school cafeteria studying until 9pm every night to avoid being home.</p>

            <p>in high school, some of my favorite places back in my hometown of okemos, MI were hiawatha hill (the small lake behind it), the watertower, and the secret trail across from the high school with a field of flowers, also a field at night. the dunkin donuts open 24/7 by the highway.</p>

            <p>18-20: i did a bunch of stuff during this time. grew content creation. the experience of having a short haircut. cptsd. worked at culvers. rejected from college.</p>

            <p>present day (21-25): this next chapter of life is 21-25. during these years, i want to build underground.</p>

            <p>my thoughts on SF: i moved to SF at 20 years old.</p>

            <p>how i feel in this moment: somehow, there is a deep sadness that i cannot understand. my friend told me she saw it in my eyes. i don&apos;t know where it came from. maybe it&apos;s the weight of achievement and existing active in a very capitalist industry, maybe it&apos;s the people i miss, or the constant anxiety of if i&apos;m ever enough.</p>

            <p>25-30: i meet my wife, grow the company</p>
            <p>30-40: my second company and/or expansion of my first</p>
            <p>40-60: i keep on building and leading</p>
            <p>60-80: i&apos;ll go and do a bunch of random stuff</p>
            <p>80-90: i&apos;ll probably still be pretty upbeat</p>
            <p>90 onwards: i think it&apos;s ggs and i&apos;ll spend my time resting and carefree. you had a good life jia</p>

            <p>some other quirks about me are that i am a big germaphobe. my friends keep teasing me about it but lowkey it probably does get annoying for them sometimes. i can&apos;t drink restaurant water without a piece of mind and i need to have it with a slice of lemon. then i proceed to eat the whole lemon slice with the rind. i love lemons a lot.</p>

            <p>day 507: 40 pull-ups a day</p>

            <p>what my exes (3.5) have said about me:</p>
            <ul className="space-y-2">
              <li>&quot;i can see you being a successful musician&quot; - the first song i ever released was about her</li>
              <li>&quot;be more grounded&quot; - 2/10, idk why this girl told me to dream smaller. that was a turn off. downvote.</li>
              <li>&quot;you&apos;ll end up making more money than me, haha&quot; - she&apos;s doing research at oxford rn lol what she even talking abt</li>
              <li>&quot;i know you&apos;ll succeed in the brutal tech scene&quot; - she was a sweetheart, in public health and deeply loyal</li>
            </ul>

            <p>i want the petite bouquets at trader joes. i want more circle lamps from ikea. i want a live rabbit as a pet. i&apos;m not too sure if i want a family. i want more vivian westwood.</p>

            <p>for my gf/fiance/wife i will buy or pick flowers or write a note at least once every month. whether it is a small flower from the side of the road or a big bouquet, a long handwritten letter or a small scribble. UNLESS they have a drastically different love language.</p>

            <p>on my mom&apos;s side: great grandma started a pineapple farm in vietnam. matriarchal.</p>
            <p>on my dad&apos;s side: came from fishermen. royal lineage on my dad&apos;s side were phd linguists. that&apos;s why i have a way with words (horrendous run-on sentences).</p>

            <p>the meaning of life is to understand the context of the past and to create context for the future. everything you touch feels instantaneous and fleeting, but it never will be. it will be held in space. every memory is never forgotten by time. if you had fallen in a forest and then died the universe would hear you and that moment is stored somewhere no one can see or comprehend. everything compounds and will be compounded to the future. any moment of joy you create for yourself ancestors had created to make it easier for you to create it now. someone had brought a bowl of rice to your great grandma and she smiled and with that smile she had the confidence to face the obstacles she had back then and the reason you&apos;re smiling now. let yourself be happy and let yourself be sad let yourself be angry shoot for your goals and push yourself to challenges.</p>

            <p>act like a person:</p>
            <ul className="space-y-2">
              <li>A. beyond all these paragraphs, life is simple. remind yourself you are an animal. drink water, eat healthy, go to gym, talk to others.</li>
              <li>B. inputs and outputs - similar to coding and physics just look at what you are given and what you want out and search your brain for the equation and then execute</li>
              <li>C. do the bare minimum to keep going. something i learned from a friend in college. make things as easy as possible to do. outfit, tasks.</li>
            </ul>

            <p>positive sum</p>
          </div>
        </div>
      </div>
    </div>
  );
}

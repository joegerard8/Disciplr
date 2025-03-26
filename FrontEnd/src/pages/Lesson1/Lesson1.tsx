import CheckpointComponent from "../../components/CheckpointComponent";
import Sidebar from "../../components/Sidebar";

export default function Lesson1() {
    const questions: Array<string> = ['What happened after Jesus Christ and His apostles died?', 'Why did Joseph Smith pray in 1820', 'Who appeared to Joseph Smith in the First Vision?'];
    const answers: Array<string> = ['The world became more peaceful', 'Some of Christ’s teachings were lost or changed', 'Everyone followed the same religion',
      'He wanted to know which church to join', 'He was asking for good weather', 'He was writing a book',
      'An angel', 'God the Father and Jesus Christ', 'Moses and Elijah'
    ];
    const sidebarItems: string[] = [
      "1. Why Was a Restoration Needed?",
      "2. Joseph Smith’s First Vision",
      "3. The Coming Forth of the Book of Mormon",
      "4. The Restoration of the Priesthood",
      "5. Christ’s Church Today",
      "6. What the Restoration Means for You"
    ];

    return (
      <>
      <Sidebar items={sidebarItems} />
      <div className="lesson-content">
        <h2>Why Was a Restoration Needed?</h2>
        <p>
          After Jesus Christ and His apostles died, many of His teachings were
          lost or changed. Over time, different churches were formed, each
          teaching different beliefs. Because of this, God promised to restore
          the fullness of the gospel in the latter days.
        </p>
  
        <h2>Joseph Smith’s First Vision</h2>
        <p>
          In 1820, a young boy named Joseph Smith wanted to know which church to
          join. He prayed for guidance, and God the Father and Jesus Christ
          appeared to him. They told him not to join any church because Christ’s
          original Church was not on the earth. This event is called the First
          Vision, and it was the beginning of the Restoration.
        </p>

        <h2>The Coming Forth of the Book of Mormon</h2>
        <p>
        In 1823, Joseph Smith was visited by the angel Moroni, who told him about 
        an ancient record written on gold plates. These plates contained the history 
        of God’s dealings with people in the Americas. Joseph was later given the power
        to translate these records, and in 1830, the Book of Mormon was published. 
        This book serves as another testament of Jesus Christ and is central to the Restoration.
        </p>

        <h2>The Restoration of the Priesthood</h2>
        <p>
        In 1829, John the Baptist appeared to Joseph Smith and Oliver Cowdery and conferred 
        upon them the Aaronic Priesthood, which includes the authority to baptize. Later, Peter,
         James, and John—three of Christ’s original apostles—appeared and restored the Melchizedek Priesthood,
          which includes the authority to lead Christ’s Church and perform sacred ordinances. 
          This priesthood power was necessary for the full organization of the Church.
        </p>        

        <h2>Christ’s Church Today</h2>
        <p>
        On April 6, 1830, The Church of Jesus Christ of Latter-day Saints was officially organized. 
        With priesthood authority, modern prophets, continuing revelation, and sacred ordinances, 
        the Church today is the same organization that Christ established during His ministry. 
        Led by living prophets, the Church continues to spread the teachings of Jesus Christ throughout the world.
        </p>

        <h2>What the Restoration Means for You</h2>
        <p>
        The Restoration means that we have access to the same blessings that existed in Christ’s original Church.
         We can receive guidance through living prophets, read God’s word in the Book of Mormon, 
         and participate in sacred ordinances like baptism and temple worship. Because of the Restoration, 
         we can develop a personal relationship with Jesus Christ and follow His gospel in its fullness.

        </p>
        <CheckpointComponent questions={questions} answers={answers}></CheckpointComponent>
      </div>
      </>
    );
  };

  
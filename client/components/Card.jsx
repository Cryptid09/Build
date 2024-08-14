import SingleCard from './SingleCard';
import MicIcon from '@mui/icons-material/Mic';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';


export default function Card() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-700 to-black text-white">
      <h2 className="text-4xl font-bold mb-10">Great for students with ADHD</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl">
        <SingleCard
          icon={<MicIcon />}
          title="Record lectures"
          description="Record your lectures with one tap"
        />
        <SingleCard
          icon={<EditOutlinedIcon />}
          title="Auto-generate Notes"
          description="Beautiful, organized notes"
        />
        <SingleCard
          icon={<ArticleOutlinedIcon/>}
          title="Auto-create FlashSinglecards"
          description="Review flashSinglecards on the go"
        />
        <SingleCard
          icon={<HubOutlinedIcon />}
          title="Auto-create Quizzes"
          description="Test yourself and track progress"
        />
        <SingleCard
          icon={<GraphicEqOutlinedIcon />}
          title="Auto-create Podcasts"
          description="Listen to notes in podcast format"
        />
        <SingleCard
          icon={<DashboardCustomizeOutlinedIcon />}
          title="& More"
          description="More to come!"
        />
      </div>
    </div>
  );
}
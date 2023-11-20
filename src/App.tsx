import { AudioClip } from './types'
import Drum from './Drum'
import './App.css'

const audioClips: AudioClip[] = [
  {
    keyTrigger: 'Q',
    url: './Heater-1.mp3',
    description: 'Heater 1'
  },
  {
    keyTrigger: 'W',
    url: './Heater-2.mp3',
    description: 'Heater 2'
  },
  {
    keyTrigger: 'E',
    url: './Heater-3.mp3',
    description: 'Heater 3'
  },
  {
    keyTrigger: 'A',
    url: './Heater-4_1.mp3',
    description: 'Heater 4'
  },
  {
    keyTrigger: 'S',
    url: './Heater-6.mp3',
    description: 'Clap'
  },
  {
    keyTrigger: 'D',
    url: './Dsc_Oh.mp3',
    description: 'Open HH'
  },
  {
    keyTrigger: 'Z',
    url: './Kick_n_Hat.mp3',
    description: 'Kick-n\'-Hat'
  },
  {
    keyTrigger: 'X',
    url: './RP4_KICK_1.mp3',
    description: 'Kick'
  },
  {
    keyTrigger: 'C',
    url: './Cev_H2.mp3',
    description: 'Closed HH'
  }
]

function App() {
  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const clip = audioClips.find((clip) => clip.keyTrigger === e.key.toUpperCase());
    if(!clip) return;
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
    .play()
    .catch(console.error)
    document.getElementById("drum-" + clip.keyTrigger)?.focus();
    document.getElementById('display')!.innerText = clip.description;
  }

  return (
    <div id="drum-machine" onKeyDown={playAudio}>
      <div className='drum-machine-keyboard'>
        {audioClips.map((clip) => (
          <Drum audioClip={clip} key={clip.keyTrigger}/>
        ))}
      </div>
      <div className='drum-machine-panel'>
        <div id="display"></div>
      </div>
    </div>
  )
}

export default App

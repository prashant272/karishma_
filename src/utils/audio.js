// Royalty-free Indian classical Shehnai/Sitar ambient audio synthesizer & stream
class RoyalAudioController {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.timer = null;
    this.gainNode = null;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
  }

  // Plays a soothing Raag-inspired Shehnai & Tanpura melody using Web Audio API synthesis
  start() {
    this.init();
    if (!this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    if (this.isPlaying) return;
    this.isPlaying = true;

    // Master volume gain
    this.gainNode = this.audioCtx.createGain();
    this.gainNode.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
    this.gainNode.connect(this.audioCtx.destination);

    // Auspicious Raag Yaman notes (Sa, Re, Ga, Ma', Pa, Dha, Ni)
    const notes = [
      261.63, // C4
      293.66, // D4
      329.63, // E4
      369.99, // F#4
      392.00, // G4
      440.00, // A4
      493.88, // B4
      523.25  // C5
    ];

    let noteIdx = 0;
    const playNote = () => {
      if (!this.isPlaying || !this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const noteGain = this.audioCtx.createGain();

      // Warm sound timbre simulating Indian reed instrument (Shehnai)
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(notes[noteIdx % notes.length], this.audioCtx.currentTime);

      noteGain.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
      noteGain.gain.exponentialRampToValueAtTime(0.09, this.audioCtx.currentTime + 0.3);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 1.8);

      osc.connect(noteGain);
      noteGain.connect(this.gainNode);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 1.9);

      // Next melodic note in Yaman sequence
      const step = [1, 2, -1, 3, 2, -2, 1, 4];
      noteIdx = Math.abs(noteIdx + step[noteIdx % step.length]) % notes.length;

      this.timer = setTimeout(playNote, 950);
    };

    playNote();
  }

  stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
    }
    if (this.gainNode && this.audioCtx) {
      try {
        this.gainNode.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
      } catch (e) {}
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

export const royalMusic = new RoyalAudioController();


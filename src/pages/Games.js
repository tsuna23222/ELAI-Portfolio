import React, { useState } from 'react';
import './Games.css';

const games = [
  {
    id: 1,
    title: 'Sword Fight Until Death',
    cover: '/game1-cover.png',
    gameplay: '/game1-gameplay.png',
    description: 'A fast-paced sword fighting game where players battle each other until only one survives. Features a shop system with multiple weapons including Rocket Launcher, EpicKatana, and Seer sword.',
    tags: ['PvP', 'Sword Fighting', 'Shop System', 'Multiplayer'],
    status: 'Published',
    icon: '🗡️',
  },
  {
    id: 2,
    title: 'Pisitol ALL OUT BattleROYALE!!!',
    cover: '/game2-cover.png',
    gameplay: '/game2-gameplay.png',
    description: 'A pistol-only battle royale game with an open world map. Features a perk system, multiple gun variants like the Desert Eagle, and intense first-person shooting gameplay.',
    tags: ['Battle Royale', 'FPS', 'Perks', 'Open World'],
    status: 'Published',
    icon: '🔫',
  },
  {
    id: 3,
    title: 'Basic Obby!!!',
    cover: '/game3-cover.png',
    gameplay: '/game3-gameplay.png',
    description: 'A colorful obstacle course (obby) game with multiple stages. Features power-ups like SpeedCoil and Magic Carpet, and a Skip A Stage option to keep things fun and accessible.',
    tags: ['Obby', 'Parkour', 'Stages', 'Power-ups'],
    status: 'Private',
    icon: '🏃',
  },
];

function Games() {
  const [selected, setSelected] = useState(null);
  const [imgView, setImgView] = useState(null);

  return (
    <div className="page games-page">
      <div className="glow-blob2" />

      <div className="games-header">
        <span className="page-label">// my roblox games</span>
        <h1 className="page-title">Games Created</h1>
        <p className="games-subtitle">Built with Lua scripting in Roblox Studio 🎮</p>
      </div>

      <div className="games-grid">
        {games.map((game) => (
          <div
            key={game.id}
            className={`game-card ${selected === game.id ? 'expanded' : ''}`}
          >
            {/* Cover + Gameplay Images */}
            <div className="game-images">
              <img
                src={game.cover}
                alt={`${game.title} cover`}
                className="game-cover"
                onClick={() => setImgView(game.cover)}
              />
              <img
                src={game.gameplay}
                alt={`${game.title} gameplay`}
                className="game-gameplay"
                onClick={() => setImgView(game.gameplay)}
              />
              <span className="img-hint">Click images to enlarge</span>
            </div>

            {/* Info */}
            <div className="game-info">
              <div className="game-top">
                <span className="game-icon">{game.icon}</span>
                <span className={`game-status ${game.status.toLowerCase()}`}>
                  {game.status === 'Private' ? '🔒' : '🌐'} {game.status}
                </span>
              </div>
              <h3 className="game-title">{game.title}</h3>
              <p className="game-desc">{game.description}</p>
              <div className="game-tags">
                {game.tags.map((tag, i) => (
                  <span key={i} className="game-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {imgView && (
        <div className="lightbox" onClick={() => setImgView(null)}>
          <div className="lightbox-inner">
            <img src={imgView} alt="Game screenshot" />
            <button className="lightbox-close" onClick={() => setImgView(null)}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Games;

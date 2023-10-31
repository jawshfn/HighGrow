import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/AchievementsPage.css'; // Assuming you'll have a corresponding CSS file
import { Link, useLocation } from 'react-router-dom';
import CurrencyDisplay from './CurrencyDisplay';
import {formatNumber} from '../util/formatNumber';
import { claimAchievementReward } from '../redux/gameSlice';

const AchievementsPage = () => {
    const { currency } = useSelector((state) => state.game);
    const achievements = useSelector(state => state.game.achievements);
    const dispatch = useDispatch();
    const location = useLocation(); // Get the current location

    return (
        <div>
        <div className="achievement-page">
        <h1>Neon City</h1>
        {location.pathname !== '/' && (
        <nav>
        <Link to="/game">Home</Link> {/* Updated Link */}
        <Link to="/achievements">Achievements</Link>
        <Link to="/managers">Managers</Link>
        </nav>
      )}
      <div className="currency-container">
      {location.pathname !== '/' && (
        <CurrencyDisplay currency={formatNumber(currency)} /> // Use the new component
      )} </div>
        <div className="achievements-container">
            {achievements.map(achievement => (
                <div className="achievement" key={achievement.id}>
                    <h3>{achievement.name}</h3>
                    <p>{achievement.description}</p>
                    <p>$ {formatNumber(achievement.reward.amount)}</p>
                    {achievement.isAchieved ? (
    achievement.isClaimed ? (
        <button disabled>Claimed</button>
    ) : (
        <button onClick={() => dispatch(claimAchievementReward(achievement.id))}>Claim</button>
    )
) : (
    <button disabled>Claim</button>
)}
                </div>
            ))}
        </div>
        </div>
        </div>
    );
}

export default AchievementsPage;

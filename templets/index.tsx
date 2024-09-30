// 型のインポート
import React from 'react';
import './styles/App.css';
interface ProfileCardProps {
  name: string;
  age: number;
  school: string;
  major: string;
}

// Appコンポーネント
const App: React.FC = () => {
  return (
    <div className="app-container">
      <ProfileCard 
        name="與田 一水" 
        age={20} 
        school="熊本私立文徳高等学校" 
        major="国士舘大学 政経学部 経済学科 3年" 
      />
      <SkillsList />
    </div>
  );
};

// Propsを受け取るコンポーネント
const ProfileCard: React.FC<ProfileCardProps> = ({ name, age, school, major }) => {
  return (
    <div className="profile-card">
      <h1>{name}</h1>
      <p>年齢: {age}歳</p>
      <p>{school} 卒業</p>
      <p>{major}</p>
    </div>
  );
};

// SkillsListコンポーネント
const SkillsList: React.FC = () => {
  const skills = ['C言語', 'HTML', 'CSS', 'TypeScript', 'React', 'Python'];

  return (
    <div className="skills-list">
      <h2>学習してきたこと</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

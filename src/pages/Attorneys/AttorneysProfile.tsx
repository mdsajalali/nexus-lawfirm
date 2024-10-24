import SharedNavbar from "../../shared/SharedNavbar";
import banner from "/images/attorneys/attorneys_banner.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AttorneysProfileCard from "../../components/AttorneysProfileCard";
import ScheduleConsultation from "../../shared/ScheduleConsultation";

interface User {
  id: number;
  user: {
    img: string;
    name: string;
    designation: string;
    overview: string;
    social_links: string[];
  };
  about: {
    desc_one: string;
    desc_two: string;
  };
  practice_areas: string[];
  experience_and_achievements: string[];
  education_milestones: {
    degree: string;
    university: string;
    years: string;
  }[];
  professional_affiliations: string[];
  awards_and_honors: string[];
}

interface attorneyProps {
  id: number;
  user: {
    img: string;
    name: string;
    designation: string;
    overview: string;
    social_links: string[];
  };
  about: {
    desc_one: string;
    desc_two: string;
  };
  practice_areas: string[];
  experience_and_achievements: string[];
  education_milestones: {
    degree: string;
    university: string;
    years: string;
  }[];
  professional_affiliations: string[];
  awards_and_honors: string[];
}

const AttorneysProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/attorneys.json");
        const data: attorneyProps[] = await response.json();
        const filteredUser = data.find(
          (item) => item.id === parseInt(id || "")
        );

        if (filteredUser) {
          const user: User = {
            id: filteredUser.id,
            user: filteredUser.user,
            about: filteredUser.about,
            practice_areas: filteredUser.practice_areas,
            experience_and_achievements:
              filteredUser.experience_and_achievements,
            education_milestones: filteredUser.education_milestones,
            professional_affiliations: filteredUser.professional_affiliations,
            awards_and_honors: filteredUser.awards_and_honors,
          };
          setUsers([user]);
        } else {
          setUsers([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUsers();
  }, [id]);

  return (
    <>
      <SharedNavbar
        banner={banner}
        title="Our Legal Team"
        bread_text="Attorneys"
        bread_link="attorneys"
      />
      <AttorneysProfileCard users={users} />
      {users.length === 0 && (
        <p className="text-center py-10 font-opensans">User not found</p>
      )}
      <ScheduleConsultation />
    </>
  );
};

export default AttorneysProfile;

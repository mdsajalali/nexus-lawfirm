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

interface AttorneyProps {
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
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/attorneys.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: AttorneyProps[] = await response.json();

        const filteredUser = data.find((item) => item.id === Number(id));
        if (filteredUser) {
          setUser(filteredUser);
        } else {
          setUser(null);
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
      {user ? (
        <AttorneysProfileCard users={[user]} />
      ) : (
        <p className="text-center py-10 font-opensans">User not found</p>
      )}
      <ScheduleConsultation />
    </>
  );
};

export default AttorneysProfile;

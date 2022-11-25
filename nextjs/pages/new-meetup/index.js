import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";

export default function NewMeetupPage() {
  const router = useRouter();
  const onAddMeetup = async (meetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    router.push("/");
  };
  return (
    <Fragment>
      <Head>
        <title>add new meet up </title>
        <meta name="description" content="add your own meet up  "></meta>
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </Fragment>
  );
}

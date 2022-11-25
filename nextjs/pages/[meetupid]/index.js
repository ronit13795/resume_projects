import MeetupDetail from "../../components/meetups/MeetupDetail";
import dbConnect from "../../lib/dbConnect";
import MeetupModel from "../../models/meetUp";
import { Fragment } from "react";
import Head from "next/head";

export default function MeetupDetails({ meetupData }) {
  return (
    <Fragment>
      <Head>
        <title>{meetupData.title}</title>
        <meta name="description" content={meetupData.description}></meta>
      </Head>
      <MeetupDetail
        image={meetupData.image}
        address={meetupData.address}
        description={meetupData.description}
        title={meetupData.title}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  await dbConnect();
  const meetups = await MeetupModel.find({}, "_id");
  return {
    fallback: false,
    paths: meetups.map((meetup) => {
      return {
        params: { meetupid: meetup._id.toString() },
      };
    }),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupid;
  await dbConnect();
  const selectedMeetUp = await MeetupModel.findOne({ _id: meetupId });
  return {
    props: {
      meetupData: {
        id: selectedMeetUp._id.toString(),
        title: selectedMeetUp.title,
        address: selectedMeetUp.address,
        image: selectedMeetUp.image,
        description: selectedMeetUp.description,
      },
    },
  };
}

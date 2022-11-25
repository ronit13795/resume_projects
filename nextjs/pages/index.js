import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";
import Head from "next/head";
import MeetupModel from "../models/meetUp";
import dbConnect from "../lib/dbConnect";

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Meet Ups </title>
        <meta
          name="description"
          content="a great website to search incoming meet ups "
        ></meta>
      </Head>

      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps() {
  await dbConnect();
  const meetups = await MeetupModel.find();
  return {
    props: {
      meetups: meetups.map(({ title, address, image, description, _id }) => {
        return {
          title,
          address,
          image,
          id: JSON.stringify(_id),
        };
      }),
      revalidate: 1,
    },
  };
}

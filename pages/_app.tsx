import { AmazonAIPredictionsProvider } from "@aws-amplify/predictions";
import { Amplify } from "aws-amplify";
import type { AppProps } from "next/app";
import awsconfig from "../src/aws-exports";
import "../styles/globals.css";

Amplify.configure(awsconfig);

try {
  Amplify.addPluggable(new AmazonAIPredictionsProvider());
} catch (error) {}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

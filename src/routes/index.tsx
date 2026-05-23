import { createFileRoute } from "@tanstack/react-router";
import { SecPipelineApp } from "@/components/secpipeline/SecPipelineApp";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <SecPipelineApp />;
}

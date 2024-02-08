import { Button, styled } from "@attentive-platform/stem-ui";
import Link from "next/link";

const StyledDiv = styled("div")(({ color }) => ({
  background: color ?? "var(--color-neutral-70)",
  padding: "2rem",
  alignItems: "center",
  width: "100%",
  height: "100%",
}));

export default function Home() {
  return (
    <StyledDiv>
      Test button
      <StyledDiv color='var(--color-neutral-40)'>
        <Button color="secondary">
          <Link href="/about">About</Link>
        </Button>
      </StyledDiv>
    </StyledDiv>
  );
}

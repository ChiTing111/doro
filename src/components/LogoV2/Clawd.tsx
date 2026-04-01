import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { Box, Text } from '../../ink.js';
import { env } from '../../utils/env.js';
export type ClawdPose = 'default' | 'arms-up'
| 'look-left'
| 'look-right';

type Props = {
  pose?: ClawdPose;
};

// Pixel rabbit mascot for Doro
// Based on Jesse's pixel art: white rabbit with black outline, pink inner ears, black eyes
//
// The rabbit in a ~9-col wide grid (each █ = 1 col):
//
//   row 0 (ear tips):    ▐█▌ ▐█▌       two ears with space between
//   row 1 (ear+pink):    ▐█▌ ▐█▌       ears continue (pink accent via color)
//   row 2 (head top):     ▐█████▌       white head, full width
//   row 3 (eyes):         ▐█▀█▀█▌       eyes as black squares in white face
//   row 4 (chin):         ▐█████▌       white chin

export function Clawd(t0) {
  const $ = _c(4);
  let t1;
  if ($[0] !== t0) {
    t1 = t0 === undefined ? {} : t0;
    $[0] = t0;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const {
    pose: t2
  } = t1;
  const pose = t2 === undefined ? "default" : t2;
  if (env.terminal === "Apple_Terminal") {
    let t3;
    if ($[2] !== pose) {
      t3 = <AppleTerminalClawd pose={pose} />;
      $[2] = pose;
      $[3] = t3;
    } else {
      t3 = $[3];
    }
    return t3;
  }
  return <DoroBunny />;
}

function DoroBunny() {
  const $ = _c(1);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    // White body on dark terminal bg. clawd_body=white, clawd_background=black.
    // Row 0-1: ears (white blocks with gap)
    // Row 2: head top (solid white bar)
    // Row 3: face with black eyes
    // Row 4: chin (solid white bar)
    t0 = (
      <Box flexDirection="column">
        <Text>
          <Text>{" "}</Text>
          <Text color="clawd_body">{"██"}</Text>
          <Text>{"   "}</Text>
          <Text color="clawd_body">{"██"}</Text>
        </Text>
        <Text>
          <Text>{" "}</Text>
          <Text color="clawd_body">{"█"}</Text>
          <Text color="rgb(255,154,162)">{"▌"}</Text>
          <Text>{"   "}</Text>
          <Text color="rgb(255,154,162)">{"▐"}</Text>
          <Text color="clawd_body">{"█"}</Text>
        </Text>
        <Text>
          <Text>{" "}</Text>
          <Text color="clawd_body">{"███████"}</Text>
        </Text>
        <Text>
          <Text>{" "}</Text>
          <Text color="clawd_body">{"██"}</Text>
          <Text color="clawd_background" backgroundColor="clawd_body">{"▄"}</Text>
          <Text color="clawd_body">{"█"}</Text>
          <Text color="clawd_background" backgroundColor="clawd_body">{"▄"}</Text>
          <Text color="clawd_body">{"██"}</Text>
        </Text>
        <Text>
          <Text>{" "}</Text>
          <Text color="clawd_body">{"███████"}</Text>
        </Text>
      </Box>
    );
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}

function AppleTerminalClawd(t0) {
  const $ = _c(1);
  const {
    pose
  } = t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = (
      <Box flexDirection="column" alignItems="center">
        <Text>
          <Text color="clawd_body">{"█"}</Text>
          <Text>{"  "}</Text>
          <Text color="clawd_body">{"█"}</Text>
        </Text>
        <Text backgroundColor="clawd_body">{" ".repeat(5)}</Text>
        <Text>
          <Text backgroundColor="clawd_body">{" "}</Text>
          <Text color="clawd_background">{"▀"}</Text>
          <Text backgroundColor="clawd_body">{" "}</Text>
          <Text color="clawd_background">{"▀"}</Text>
          <Text backgroundColor="clawd_body">{" "}</Text>
        </Text>
      </Box>
    );
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  return t1;
}

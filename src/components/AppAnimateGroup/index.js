import { VelocityTransitionGroup } from "velocity-react";
import "velocity-animate/velocity.ui";
import { memo } from "react";

const enterAnimationDefaults = {
  animation: "transition.fadeIn",
  stagger: 50,
  duration: 200,
  display: null,
  visibility: "visible",
  delay: 0,
};

const leaveAnimationDefaults = {
  animation: "transition.slideUpOut",
  backwards: 150,
  duration: 200,
  display: null,
  visibility: "visible",
  delay: 0,
};

function AppAnimateGroup({ ...props }) {
  return (
    <VelocityTransitionGroup
      {...props}
      enter={{ ...enterAnimationDefaults, ...props.enter }}
      leave={{ ...leaveAnimationDefaults, ...props.leave }}
    />
  );
}

export default memo(AppAnimateGroup);

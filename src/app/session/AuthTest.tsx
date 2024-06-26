"use client";

import React, { useState } from "react";
import { Button } from "flowbite-react";
import { updateActionTest } from "../actions/AuctionsActions";

export default function AuthTest() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>();

  function doUpdate() {
    setResult(undefined);
    setLoading(true);
    updateActionTest()
      .then((res) => setResult(res))
      .finally(() => setLoading(false));
  }
  return (
    <div className="flex items-center gap-4">
      <Button outline isProcessing={loading} onClick={doUpdate}>
        TestAuth
      </Button>
      <div>{JSON.stringify(result, null, 2)}</div>
    </div>
  );
}

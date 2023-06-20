import React from "react";
import Copy from "./icons/copy";
import Share from "./icons/share";

export default function LinkDisplay() {
  return (
    <div className="mx-auto mt-10 flex gap-x-3 rounded border-4  border-accent bg-secondary p-4 text-white lg:w-1/4">
      <div>
        <img src="/qr-code.png" alt="" />
      </div>

      <div className="space-y-3 text-left">
        <h4 className="text-sm">Your shortened link</h4>
        <p className="text-2xl font-medium">www.tly.com</p>
        <div className="flex gap-x-5">
          <button>
            <Copy />
          </button>
          <button>
            <Share />
          </button>
        </div>
      </div>
    </div>
  );
}

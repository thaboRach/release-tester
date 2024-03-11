import type { UserConfig, RuleOutcome } from "@commitlint/types";
import { RuleConfigSeverity } from "@commitlint/types";
import type { Commit } from "conventional-commits-parser";

const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  plugins: [
    {
      rules: {
        "scope-references-pattern": (
          commitMessage: Commit,
          when,
          pattern: string | undefined
        ): RuleOutcome => {
          const { scope } = commitMessage;
          if (pattern == null) {
            return [false, "missing RegEx pattern"];
          }
          if (scope == null) {
            return [false, "scope may not be empty"];
          }

          const regex = new RegExp(pattern);
          let result = regex.test(scope);
          if (when === "never") {
            result = !result;
          }
          return [result, `Scope should follow the pattern SMME-XXXX`];
        },
      },
    },
  ],
  rules: {
    "type-enum": [
      RuleConfigSeverity.Error,
      "always",
      ["feat", "fix", "chore", "docs", "style", "refactor", "test"],
    ],
    "header-max-length": [RuleConfigSeverity.Error, "always", 100],
    "subject-case": [RuleConfigSeverity.Disabled],
    "subject-empty": [RuleConfigSeverity.Error, "never"],
    "subject-full-stop": [RuleConfigSeverity.Disabled],
    "type-empty": [RuleConfigSeverity.Error, "never"],
    "type-case": [RuleConfigSeverity.Disabled],
    "scope-references-pattern": [
      RuleConfigSeverity.Error,
      "always",
      /^TEST-\d+/,
    ],
  },
};

export default Configuration;

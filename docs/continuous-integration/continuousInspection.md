# Continuous Inspection

* [Definition of Cyclomatic Complexity](#definition-of-cyclomatic-complexity)
* [Reduce Code Complexity](#reduce-code-complexity)
* [Dynamic Link Libraries and Shared Libraries](#dynamic-link-libraries-and-shared-libraries)
* [Perform Design Reviews Continuously](#perform-design-reviews-continuously)
* [Maintain Organizational Standards with Code Audits](#maintain-organizational-standards-with-code-audits)
* [Reduce Duplicate Code](#reduce-duplicate-code)
* [Assess Code Coverage](#assess-code-coverage)

## Definition of Cyclomatic Complexity

[Cyclomatic Complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity)
* Cyclomatic complexity is a software metric (measurement), used to indicate the complexity of a program.
* It is a quantitative measure of the number of linearly independent paths through a program's source code.

## Reduce Code Complexity

* Reduce cyclomatic complexity in your code base by leveraging automated inspectors
    * JavaScript
        * Eslint is a Linter but can do cyclomatic analysis to a degree
        * Google Closure Compiler
    * Java
        * CheckStyle
        * PMD
    * .NET
        * FxCop
        * NDepend
* Static Analyzers can identify areas of your code with higher complexity.
* Run these inspectors from your automated build.

## Dynamic Link Libraries and Shared Libraries

* During a compilation process several types of assemblies can be produced
    * An executable file (*.exe, a binary file)
    * A dynamic link library file (*.dll)
        * Basic a Shared Library
    * A lib is a unit of code that is bundled within your application executable.

## Perform Design Reviews Continuously

* Use tools that can help find assemblies that are highly dependent on other packages and lead to brittle architecture

## Maintain Organizational Standards with Code Audits

* Reduce the amount of duplicate code in a code base through special tools
* Tools can pinpoint areas of higher code duplication based on custom thresholds
* Use tools like this for targeted refactorings

## Assess Code Coverage

Typical Metrics by Code Coverage Tools like Istanbul

* Statements: How many of the statements in you code are executed.
* Branches: Conditional statements create branches of code which may not be executed (e.g. if/else).
    * This metric tells you how many of your branches have been executed.
* Functions: The proportion of the functions you have defined which have been called.
* Lines: The proportion of lines of code which have been executed.

These metrics can help identify areas of your code base that need more tests.

using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IsaacsFirstASP.NETWebApp
{

    /*
     * Isaac Corcoran -- 01/20/2021
     * 
     Build an ASP.NET Web App using the same structure as in the "Building First Web App" 
    series of videos. (i.e. Non-MVC)

    Include:

    Title
    Header that lists your preferred name
    A picture of yourself doing something you enjoy
    A paragraph on what you hope to get out of this IS 413 class
    A list of the Top #3 jobs you are most interested in pursuing when you graduate
    A "Grade Calculator" form that takes as input a percentage of each grade category listed in the syllabus
    An icon for the website (displayed on the tab next to the title) (#notcoveredinthevideos)

    Style the site using a CSS file.  Level of styling is up to you, but only CSS for now.  (No Bootstrap, Angular, etc. on this assignment. We'll get there!)

    Build a JavaScript program that calculates and displays both a final percentage and a letter grade using the "Grade Calculator" form entries based on the weights listed in the syllabus.

    As always, write good code (use indentation, commenting, whitespace, descriptive variable names, etc.)

    Submit a link to the GitHub Repository containing your project. (NOTE:  Make sure the repository is Public so the TAs can access it.)

     */
    public class Program
    {
        public static void Main(string[] args) // Start of program
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}

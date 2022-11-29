﻿using System.Web;
using System.Web.Optimization;

namespace PruebaWebNexarte
{
    public class BundleConfig
    {
        // Para obtener más información sobre las uniones, visite https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Utilice la versión de desarrollo de Modernizr para desarrollar y obtener información sobre los formularios.  De esta manera estará
            // para la producción, use la herramienta de compilación disponible en https://modernizr.com para seleccionar solo las pruebas que necesite.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new Bundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/datatables").Include(
                      "~/Scripts/datatables.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/sweetalert2").Include(
                      "~/Scripts/sweetalert2.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/App").Include(
                      "~/Scripts/App.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/sweetalert2.min.css",
                      "~/Content/datatables.min.css"));
        }
    }
}

"""Generate a gameplay-programmer focused resume PDF for David Nissenoff."""

from pathlib import Path

from fpdf import FPDF
from fpdf.enums import XPos, YPos

OUTPUT = Path(__file__).resolve().parents[1] / "public" / "resume.pdf"


class ResumePDF(FPDF):
    def footer(self) -> None:
        self.set_y(-11)
        self.set_font("Helvetica", "", 8)
        self.set_text_color(120, 120, 120)
        self.cell(0, 8, "David Nissenoff  |  Gameplay Programmer", align="C")

    def content_width(self) -> float:
        return self.w - self.l_margin - self.r_margin

    def ensure_left(self) -> None:
        self.set_x(self.l_margin)


def section_title(pdf: ResumePDF, title: str) -> None:
    pdf.ln(2)
    pdf.ensure_left()
    pdf.set_font("Helvetica", "B", 10.5)
    pdf.set_text_color(11, 17, 32)
    pdf.cell(
        pdf.content_width(),
        5.5,
        title.upper(),
        new_x=XPos.LMARGIN,
        new_y=YPos.NEXT,
    )
    pdf.set_draw_color(59, 130, 246)
    pdf.set_line_width(0.45)
    y = pdf.get_y()
    pdf.line(pdf.l_margin, y, pdf.w - pdf.r_margin, y)
    pdf.ln(2.2)
    pdf.ensure_left()


def bullet(pdf: ResumePDF, text: str) -> None:
    pdf.ensure_left()
    pdf.set_font("Helvetica", "", 9)
    pdf.set_text_color(40, 40, 40)
    pdf.set_x(pdf.l_margin + 2)
    pdf.multi_cell(
        pdf.content_width() - 2,
        4.0,
        f"-  {text}",
        new_x=XPos.LMARGIN,
        new_y=YPos.NEXT,
    )
    pdf.ensure_left()


def job_header(pdf: ResumePDF, role: str, org: str, dates: str) -> None:
    pdf.ln(1)
    pdf.ensure_left()
    pdf.set_font("Helvetica", "B", 9.5)
    pdf.set_text_color(20, 20, 20)
    pdf.multi_cell(
        pdf.content_width(),
        4.3,
        role,
        new_x=XPos.LMARGIN,
        new_y=YPos.NEXT,
    )
    pdf.ensure_left()
    pdf.set_font("Helvetica", "", 8.5)
    pdf.set_text_color(70, 70, 70)
    pdf.multi_cell(
        pdf.content_width(),
        4.0,
        f"{org}  |  {dates}",
        new_x=XPos.LMARGIN,
        new_y=YPos.NEXT,
    )
    pdf.ensure_left()


def labeled_line(pdf: ResumePDF, label: str, value: str) -> None:
    pdf.ensure_left()
    pdf.set_font("Helvetica", "B", 9)
    pdf.set_text_color(40, 40, 40)
    label_width = pdf.get_string_width(label) + 1
    pdf.cell(label_width, 4.0, label)
    pdf.set_font("Helvetica", "", 9)
    pdf.multi_cell(
        pdf.content_width() - label_width,
        4.0,
        value,
        new_x=XPos.LMARGIN,
        new_y=YPos.NEXT,
    )
    pdf.ensure_left()


def main() -> None:
    pdf = ResumePDF(format="Letter")
    pdf.set_auto_page_break(auto=True, margin=12)
    pdf.set_margins(16, 12, 16)
    pdf.add_page()
    width = pdf.content_width()

    pdf.set_font("Helvetica", "B", 18)
    pdf.set_text_color(11, 17, 32)
    pdf.cell(width, 7.5, "DAVID NISSENOFF", new_x=XPos.LMARGIN, new_y=YPos.NEXT)

    pdf.set_font("Helvetica", "B", 10)
    pdf.set_text_color(59, 130, 246)
    pdf.multi_cell(
        width,
        5,
        "Gameplay Programmer  |  Unity Developer  |  Software Engineer",
        new_x=XPos.LMARGIN,
        new_y=YPos.NEXT,
    )

    pdf.set_font("Helvetica", "", 8.5)
    pdf.set_text_color(70, 70, 70)
    pdf.multi_cell(
        width,
        4.2,
        "Irvine, CA  |  (949) 616-6219  |  davidin1995@gmail.com",
        new_x=XPos.LMARGIN,
        new_y=YPos.NEXT,
    )
    pdf.multi_cell(
        width,
        4.2,
        "linkedin.com/in/david-nissenoff-680453133  |  github.com/dnoff",
        new_x=XPos.LMARGIN,
        new_y=YPos.NEXT,
    )

    section_title(pdf, "Summary")
    pdf.set_font("Helvetica", "", 9)
    pdf.set_text_color(40, 40, 40)
    pdf.multi_cell(
        width,
        4.0,
        "Mathematics graduate and gameplay programmer with shipped Unity/Android experience, "
        "CS-backed systems thinking, and 10+ years explaining complex ideas clearly. Focused on "
        "player feel, technical problem solving, and maintainable game systems.",
        new_x=XPos.LMARGIN,
        new_y=YPos.NEXT,
    )

    section_title(pdf, "Technical Skills")
    labeled_line(pdf, "Languages: ", "C#, Python, Java, JavaScript, TypeScript, SQL, C++, HTML")
    labeled_line(
        pdf,
        "Game Dev: ",
        "Unity, Blender, Android, Firebase Auth/Realtime DB, Google Play, Mobile Ads",
    )
    labeled_line(pdf, "Tools: ", "Git, Visual Studio, Cursor, Android Studio, Photoshop, Premiere")

    section_title(pdf, "Game Projects")
    job_header(pdf, "Racer - Published Endless Driving Game", "Unity / C# / Android", "Shipped")
    bullet(
        pdf,
        "Shipped Android endless racer with cloud save, auth, leaderboards, shop/unlocks, and monetization.",
    )
    bullet(
        pdf,
        "Integrated Firebase Authentication + Realtime Database for progression and competitive rankings.",
    )
    bullet(
        pdf,
        "Built daily rewards, rewarded ads, Remove Ads IAP, responsive UI, object pooling, and performance work.",
    )

    job_header(
        pdf,
        "Slay the Streamer - Top-Down Roguelite",
        "Unity / C# / Pixel Art",
        "In Development",
    )
    bullet(
        pdf,
        "Developing Gungeon-inspired combat with enemy/boss AI, weapons, projectiles, rooms, and progression.",
    )

    section_title(pdf, "Experience")
    job_header(
        pdf,
        "Substitute Teacher",
        "St. Margaret's Episcopal School, San Juan Capistrano, CA",
        "2026 - Present",
    )
    bullet(
        pdf,
        "Lead classrooms across grade levels; adapt lessons and support students, especially in mathematics.",
    )

    job_header(pdf, "Mathematics Tutor", "Self-Employed", "2011 - Present")
    bullet(
        pdf,
        "Tutor JH/HS/college math and ACT/SAT prep; Breakthrough SJC volunteer (1:1 and groups up to 5).",
    )

    job_header(
        pdf,
        "Basketball Coach",
        "St. Margaret's Episcopal School, San Juan Capistrano, CA",
        "2014 - 2023",
    )
    bullet(
        pdf,
        "Varsity assistant + Frosh/MS head coach; built a stats analytics program to guide training decisions.",
    )

    section_title(pdf, "Education")
    pdf.set_font("Helvetica", "B", 9.5)
    pdf.set_text_color(20, 20, 20)
    pdf.multi_cell(
        width,
        4.3,
        "B.A. Mathematics  |  Minor in Computer Science",
        new_x=XPos.LMARGIN,
        new_y=YPos.NEXT,
    )
    pdf.set_font("Helvetica", "", 8.5)
    pdf.set_text_color(70, 70, 70)
    pdf.multi_cell(
        width,
        4.0,
        "Occidental College - Eagle Rock, CA  |  May 2018  |  GPA 3.16",
        new_x=XPos.LMARGIN,
        new_y=YPos.NEXT,
    )
    pdf.set_font("Helvetica", "", 9)
    pdf.set_text_color(40, 40, 40)
    pdf.multi_cell(
        width,
        4.0,
        "Coursework: Data Structures, Discrete Math, Linear Algebra, Multivariable Calculus, ODEs, "
        "Number Theory, Graph Theory, Web Design & Programming. Built a Python course-selection web app.",
        new_x=XPos.LMARGIN,
        new_y=YPos.NEXT,
    )

    section_title(pdf, "Competitive Gaming")
    bullet(
        pdf,
        "WoW: Gladiator (SL S2); Top 0.1% M+ (DF S3, TWW S1). HotS Rank 1 S1. Hearthstone Legend S42.",
    )

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(OUTPUT))
    print(f"Wrote {OUTPUT} ({pdf.page_no()} page(s))")


if __name__ == "__main__":
    main()
